const React = require('react');
const Def = require('../default');

function NewComment({ data }) {
    console.log('Adding NewComment');
    return (
        <Def>
            <main>
                <h1>New Comment</h1>
                <form method="POST" action={`/places/${data.id}/comment?_method=POST`}>
                    
                        <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author"/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input className="form-control" id="content" name="content"/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="rating" className="btn btn-primary">Rating</label>
                        <input type ="checkbox" className="btn-check" id="btn-check" autocomplete="off" name="rating"/>
                        </div>
                        <div className="form-check">
                        <label htmlFor="rant" className="form-check-label">Rant</label>
                        <input className="form-check-input" type="checkbox" id="rant" name="rant"/>
                        </div>


                </form>
            </main>
        </Def>
    );
}

module.exports = NewComment;
