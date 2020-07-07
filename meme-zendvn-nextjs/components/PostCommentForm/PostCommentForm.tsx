import { useState } from "react";

type PropsType = {
    handleSubmitForm: (v: string, callback: (e?: Error) => void) => void;
}

const PostCommentForm: React.FC<PropsType> = ({ handleSubmitForm }) => {
    const [loading, setLoading] = useState(false);
    const [commentValue, setCommentValue] = useState('');

    const handleChangeComment = (e) => {
        if(e.target.value.length <= 180) {
            setCommentValue(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(loading === true) return;
        if(commentValue.trim().length !== 0) {
            // Thong bao ra ben ngoai
            setLoading(true);
            handleSubmitForm(commentValue, (e) => {
                setLoading(false);
            });
        } else {
            alert("Vui long nhap noi dung binh luan!");
        }
    }
    return (
        <div className="ass1-add-comment">
            <form action="#" onSubmit={handleSubmit}>
                <input 
                    value={commentValue}
                    onChange={handleChangeComment}
                    type="text" className="form-control ttg-border-none" placeholder="Thêm một bình luận" />
            </form>
            <div className="ass1-add-comment__content">
                <a href="#" className="ass1-add-comment__btn-save ass1-btn-icon">
                    <span>{180 - commentValue.length}</span><i onClick={handleSubmit} className="icon-Submit_Tick" />
                </a>
            </div>
        </div>
    )
}

export default PostCommentForm;