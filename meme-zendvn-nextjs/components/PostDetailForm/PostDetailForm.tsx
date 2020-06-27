import { useRef } from "react";

type PropsType = {
    url_image: string;
    post_content: string;
    obj_image: {
        base64: string;
        file: File | null;
    };
    onChangeDetailForm: (key: string, value: any) => void
}

const PostDetailForm: React.FC<PropsType> = ({ 
    url_image, 
    post_content, 
    obj_image, 
    onChangeDetailForm,
}) => {
    const inputFileEl = useRef(null);

    const handleOnChange = (key: string) => (e) => {
        const value = e.target.value;
        onChangeDetailForm(key, value);
    }

    const handleClickSelectFile = () => {
        inputFileEl.current.click();
    }

    const handleChangeFile = (e) => {
        const listFiles = e.target.files;

        if(listFiles.length === 0) return;

        const file = listFiles[0] as File;

        if ( /\/(jpe?g|png|gif|bmp)$/i.test(file.type) ) {
            const reader = new FileReader();
            
            reader.addEventListener("load", function () {
                onChangeDetailForm('obj_image', { 
                    file, 
                    base64: reader.result as string, 
                })
            }, false);

            reader.readAsDataURL(file);
        } else {
            alert("File khong hop le!");
        }
    }

    const imageURL = url_image || obj_image.base64 || "/images/no_image_available.jpg";

    return (
        <div className="ass1-section ass1-section__edit-post">
            <div className="ass1-section__content">
                <form action="#">
                    <div className="form-group">
                        <input 
                            value={url_image}
                            onChange={handleOnChange('url_image')}
                            type="text" className="form-control ttg-border-none" placeholder="https://" />
                    </div>
                    <div className="form-group">
                        <textarea 
                            value={post_content}
                            onChange={handleOnChange('post_content')}
                            placeholder="Mô tả ..."
                            className="form-control ttg-border-none" 
                        />
                    </div>
                </form>
                <input 
                    ref={inputFileEl}
                    style={{ display: 'none' }}
                    onChange={handleChangeFile}
                    type="file" />
                <div className="ass1-section__image">
                    <a href="#"><img src={imageURL} alt="default" /></a>
                </div>
                <a 
                    target="_blank" 
                    href="https://memeful.com/"
                    className="ass1-btn ass1-btn-meme">Chế ảnh từ meme</a>
                <button 
                    onClick={handleClickSelectFile}
                    className="ass1-btn ass1-btn-meme">Đăng ảnh từ máy tính</button>
            </div>
        </div>
    )
}

export default PostDetailForm;