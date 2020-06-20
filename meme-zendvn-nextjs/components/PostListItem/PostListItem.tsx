import { useState } from "react";
import { PostItem } from "../PostItem";
import { PostType } from "../../pages";
import { Button } from "../Button";
import postService from "../../services/postService";

type PropsType = {
    listPosts: PostType[];
}

const pagesize = 3;

const PostListItem: React.FC<PropsType> = (props) => {
    const [currPage, setCurrPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [listPosts, setListPosts] = useState(props.listPosts);

    function handleLoadMore() {
        if(loading) return;

        setLoading(true);
        postService
            .getPostsPaging({ pagesize, currPage: currPage + 1 })
            .then(res => {
                if(res.status === 200) {
                    const newPosts = res.posts || [];
                    setListPosts([
                        ...listPosts,
                        ...newPosts
                    ])
                    setCurrPage(prev => prev + 1);
                }
            })
            .finally(() => setLoading(false));
    }

    return (
        <div className="ass1-section__list">
            {
                listPosts.map(post => <PostItem key={post.PID} post={post}/>)
            }

            <Button 
                isLoading={loading}
                onClick={handleLoadMore}
                className="load-more ass1-btn">Xem thêm</Button>
        </div>
    )
}

export default PostListItem;