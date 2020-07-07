import { PostDetailForm } from "../../../components/PostDetailForm";
import { PostDetailSidebar } from "../../../components/PostDetailSidebar";
import { useAuthen } from "../../../helpers/useAuthen";
import { useState } from "react";
import { useGlobalState } from "../../../state";
import postService from "../../../services/postService";
import { GetServerSideProps, NextPageContext, InferGetServerSidePropsType } from "next";
import { getTokenSSRAndCSS } from "../../../helpers";
import { PostType } from "../..";
import { TypeCategory } from ".";

type PostEditDataProps = {
    postid: string;
    postDetailData: PostType;
    postCategories: TypeCategory[];
}

type PostEditProps = React.FC<InferGetServerSidePropsType<typeof getServerSideProps>>;

const PostEdit: PostEditProps = ({ postDetailData, postCategories, postid}) => {
    useAuthen();
    const [token] = useGlobalState("token");
    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState(() => {
        return {
            postid,
            url_image: postDetailData.url_image,
            post_content: postDetailData.post_content,
            category: postCategories.map(category => category.tag_index),
            obj_image: {
                file: null,
                base64: ''
            }
        };
    });
    
    const onChangeDetailForm = (key: string, value: any) => {
        if(key === "obj_image") {
            setPostData({
                ...postData,
                [key]: value,
                "url_image": ''
            });
            return;
        }

        setPostData({
            ...postData,
            [key]: value
        })
    }

    const handleSubmitPost = () => {
        setLoading(true);
        postService
            .editPost(postData, token)
            .then(res => {
                if(res.status === 200) {
                    alert("Cap nhat bai viet thanh cong");
                    setPostData({
                        ...postData,
                        url_image: res?.data?.post?.url_image,
                        obj_image: {
                            file: null,
                            base64: '',
                        }
                    })
                } else {
                    alert(res.error);
                }
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <PostDetailForm 
                        url_image={postData.url_image}
                        post_content={postData.post_content}
                        obj_image={postData.obj_image}
                        onChangeDetailForm={onChangeDetailForm}
                    />
                </div>
                <div className="col-lg-4">
                    <PostDetailSidebar 
                        loading={loading}
                        category={postData.category}
                        handleSubmitPost={handleSubmitPost}
                        onChangeDetailForm={onChangeDetailForm}
                    />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<PostEditDataProps> = async (context) => {
    const ctx = context as NextPageContext;
    const [token] = getTokenSSRAndCSS(ctx);
    const postid = ctx.query.postId as string;
  
    const postDetailPos = postService.getPostsByPostId({ postid, token })

    const [postDetail] = await Promise.all([postDetailPos]);
    
    const props = {
        postid,
        postDetailData: postDetail?.data?.post,
        postCategories: postDetail?.data?.categories || [],
    }
  
    return {
      props, 
    }
}

export default PostEdit