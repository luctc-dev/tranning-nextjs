import "./PostDetailContent.css";
import { PostCommentForm } from "../PostCommentForm"
import { PostCommentList } from "../PostCommentList"
import { PostItem } from "../PostItem";
import { PostType } from "../../pages";
import { TypeCategory } from "../../pages/posts/[postId]";
import Link from "next/link";

type PropsType = {
    postDetailData: PostType;
    postCategories: TypeCategory[];
}

const PostDetailContent: React.FC<PropsType> = ({
    postDetailData,
    postCategories,
}) => {

    return (
        <div className="ass1-section__list">
            {/* <div className="ass1-section">
                <div className="ass1-section__head">
                    <a href="#" className="ass1-section__avatar ass1-avatar"><img src="images/avatar-02.png" alt="" /></a>
                    <div>
                        <a href="#" className="ass1-section__name">Nguyễn Chính 9</a>
                        <span className="ass1-section__passed">2 giờ trước</span>
                    </div>
                    <a href="#" className="ass1-section__link ass1-btn-icon"><i className="icon-Link" /></a>
                </div>
                <div className="ass1-section__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas voluptates magnam, odit quae aut vel accusantium. Alias pariatur quidem, minus eaque officiis, sed ea repellendus tenetur ipsa inventore est earum.</p>
                    <div className="ass1-section__image">
                        <a href="#"><img src="images/microphone-1209816_1920.jpg" alt="" /></a>
                    </div>
                </div>
                <div className="ass1-section__footer">
                    <a href="#" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></a>
                    <a href="#" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote" /></a>
                    <a href="#" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full" /><span>1,274</span></a>
                    <a href="#" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
                </div>
                <div className="ass1-section__feeling">
                    <div className="ass1-feeling">
                        <a href="#" rel="tooltip" data-original-title="Happy"><img src="fonts/emotion/svg/Happy.svg" alt="" /><span>126</span></a>
                        <a href="#" rel="tooltip" data-original-title="Lol"><img src="fonts/emotion/svg/LOL.svg" alt="" /><span>256</span></a>
                        <a href="#" rel="tooltip" data-original-title="Surprised"><img src="fonts/emotion/svg/Surprised.svg" alt="" /><span>741</span></a>
                        <a href="#" rel="tooltip" data-original-title="Sad"><img src="fonts/emotion/svg/Sad.svg" alt="" /><span>2K</span></a>
                        <a href="#" rel="tooltip" data-original-title="Tongue Out"><img src="fonts/emotion/svg/Tongue_Out.svg" alt="" /><span>245</span></a>
                        <a href="#" rel="tooltip" data-original-title="No words"><img src="fonts/emotion/svg/No_words.svg" alt="" /><span>237</span></a>
                        <a href="#" rel="tooltip" data-original-title="Love"><img src="fonts/emotion/svg/Love.svg" alt="" /><span>1,236</span></a>
                        <a href="#" rel="tooltip" data-original-title="Blushing"><img src="fonts/emotion/svg/Blushing.svg" alt="" /><span>365</span></a>
                        <a href="#" rel="tooltip" data-original-title="Cool"><img src="fonts/emotion/svg/Cool.svg" alt="" /><span>412</span></a>
                        <a href="#" rel="tooltip" data-original-title="Angry"><img src="fonts/emotion/svg/Angry.svg" alt="" /><span>478</span></a>
                    </div>
                </div>
            </div> */}

            <PostItem post={postDetailData} />
            
            <div className="list-categories">
                <h5><strong>Danh mục: </strong></h5> 
                <ul>
                   
                   {
                       postCategories.map(obj => {
                           return (
                            <li key={obj.TAG_ID}>
                                <Link href="/categories/[cateId]" as={`/categories/${obj.tag_index}`}>
                                    <a>{obj.tag_value}</a>
                                </Link>
                            </li>
                           )
                       })
                   }
                    
                </ul>
            </div>


            <PostCommentForm />

            <PostCommentList />
        </div>
    )
}

export default PostDetailContent;