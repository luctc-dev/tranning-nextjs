const PostDetailSidebar = () => {

    return (
        <aside className="ass1-aside ass1-aside__edit-post">
            <div>
                <a href="#" className="ass1-btn">Đăng bài</a>
            </div>
            <div className="ass1-aside__edit-post-head">
                <span style={{ display: 'block', width: '100%', marginBottom: '10px' }}>Chọn danh mục</span>
                <label className="ass1-checkbox">
                    <input type="radio" name="state-post" />
                    <span />
                    <p>Ảnh troll</p>
                </label>
                <label className="ass1-checkbox">
                    <input type="radio" name="state-post" />
                    <span />
                    <p>FapTV</p>
                </label>
                <label className="ass1-checkbox">
                    <input type="radio" name="state-post" />
                    <span />
                    <p>Ảnh troll</p>
                </label>
                <label className="ass1-checkbox">
                    <input type="radio" name="state-post" />
                    <span />
                    <p>FapTV</p>
                </label>
                <label className="ass1-checkbox">
                    <input type="radio" name="state-post" />
                    <span />
                    <p>Ảnh troll</p>
                </label>
                <label className="ass1-checkbox">
                    <input type="radio" name="state-post" />
                    <span />
                    <p>FapTV</p>
                </label>
                <label className="ass1-checkbox">
                    <input type="radio" name="state-post"/>
                    <span />
                    <p>Ảnh troll</p>
                </label>
                <label className="ass1-checkbox">
                    <input type="radio" name="state-post" />
                    <span />
                    <p>FapTV</p>
                </label>
            </div>
            <div className="ass1-aside__get-code">
                <p>Share Link</p>
            </div>
            <div className="ass1-aside__social">
                <a href="/" className="ass1-btn-social__facebook ass1-btn-social"><i className="fa fa-facebook" aria-hidden="true" /></a>
                <a href="/" className="ass1-btn-social__twitter ass1-btn-social"><i className="fa fa-twitter" aria-hidden="true" /></a>
                <a href="/" className="ass1-btn-social__google ass1-btn-social"><i className="fa fa-google-plus" aria-hidden="true" /></a>
            </div>
        </aside>
    )
}

export default PostDetailSidebar;