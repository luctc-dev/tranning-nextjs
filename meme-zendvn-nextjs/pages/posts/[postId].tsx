import { HomeSidebar } from "../../components/HomeSidebar";
import { PostDetailContent } from "../../components/PostDetailContent";
import { GetServerSideProps, NextPageContext, InferGetServerSidePropsType } from "next";
import { getTokenSSRAndCSS } from "../../helpers";
import postService from "../../services/postService";
import { PostType } from "..";
import userService from "../../services/userService";

export type TypeCategory = {
    TAG_ID: string,
    PID: string,
    tag_index: string,
    tag_value: string,
}

export type TypeComment = {
    CID: string,
    PID: string,
    USERID: string,
    fullname: string,
    profilepicture: string,
    comment: string,
    time_added: string,
}

type PostDetailDataProps = {
    postDetailData: PostType;
    postCategories: TypeCategory[];
    userPosts: PostType[];
    comments: TypeComment[];
}

type PostDetailProps = React.FC<InferGetServerSidePropsType<typeof getServerSideProps>>;


const PostDetail: PostDetailProps = ({ userPosts, postDetailData, postCategories, comments }) => {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <PostDetailContent 
                        listComments={comments}
                        postDetailData={postDetailData}
                        postCategories={postCategories}
                    />
                </div>
                <div className="col-lg-4">
                    <HomeSidebar userPosts={userPosts} />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<PostDetailDataProps> = async (context) => {
    const ctx = context as NextPageContext;
    const [token, userToken] = getTokenSSRAndCSS(ctx);
    const userid = userToken?.id;
    const postid = ctx.query.postId as string;
  
    const postDetailPos = postService.getPostsByPostId({ postid, token })
    const userPostsPos = postService.getPostsByUserId({ token, userid });
    const commentsPos = postService.getCommentByPostId(postid);

    const [postDetail, userPostsRes, commentsRes] = await Promise.all([postDetailPos, userPostsPos, commentsPos]);

    const postUserId = postDetail?.data?.post?.USERID || '';
    
    const userInfoData = await userService.getUserById(postUserId);

    let postDetailData = null;
    
    if(postDetail?.data?.post) {
        postDetailData = {
            ...postDetail?.data?.post,
            fullname: userInfoData?.user?.fullname || '',
            profilepicture: userInfoData?.user?.profilepicture || '',
        }
    }

    const props = {
        postDetailData,
        postCategories: postDetail?.data?.categories || [],
        userPosts: userPostsRes?.posts || [],
        comments: commentsRes?.comments || [],
    }
  
    return {
      props, 
    }
  }
  

export default PostDetail