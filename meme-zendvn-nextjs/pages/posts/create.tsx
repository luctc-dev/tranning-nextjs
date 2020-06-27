import { PostDetailForm } from "../../components/PostDetailForm";
import { PostDetailSidebar } from "../../components/PostDetailSidebar";
import { useAuthen } from "../../helpers/useAuthen";
import { useState } from "react";
import { useGlobalState } from "../../state";
import postService from "../../services/postService";

const initState = {
    url_image: '',
    post_content: '',
    category: [],
    obj_image: {
        file: null,
        base64: '',
    }
}

export default function PostCreate() {
    useAuthen();
    const [token] = useGlobalState("token");
    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState(initState);

    const onChangeDetailForm = (key: string, value: any) => {
        // console.log(key, value);
        setPostData({
            ...postData,
            [key]: value
        })
    }

    const handleSubmitPost = () => {
        setLoading(true);
        postService
            .createNewPost(postData, token)
            .then(res => {
                if(res.status === 200) {
                    alert("Dang bai viet thanh cong");
                    setPostData(initState);
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