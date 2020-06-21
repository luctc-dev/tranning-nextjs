import Masonry from 'react-masonry-component';
import { PostType } from "../../pages";
import { PostItem } from "../../components/PostItem";

type PropsType = {
    userDetailPosts: PostType[]
}

const UserDetailPosts: React.FC<PropsType> = ({ userDetailPosts }) => {

    return (
        <Masonry className="ass1-section__wrap row ass1-section__isotope-init">
            {
                userDetailPosts.map(post => (
                    <PostItem 
                        key={post.PID} 
                        post={post} 
                        customClass="col-lg-6"
                    />
                ))
            }
        </Masonry>
    )
}

export default UserDetailPosts;