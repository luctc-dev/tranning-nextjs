const PostCommentForm = () => {

    return (
        <div className="ass1-add-comment">
            <form action="#">
                <input type="text" className="form-control ttg-border-none" placeholder="Thêm một bình luận" />
            </form>
            <div className="ass1-add-comment__content">
                <a href="#" className="ass1-add-comment__btn-save ass1-btn-icon"><span>180</span><i className="icon-Submit_Tick" /></a>
            </div>
        </div>
    )
}

export default PostCommentForm;