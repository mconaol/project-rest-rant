const React = require('react');
const Def = require('../default');

function NewComment({ data }) {
    console.log('Adding NewComment');
    return (
        <Def>
            <main>
                <h1>New Comment</h1>
                <form method="POST" action={`/places/${data.id}/comment`}>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input className="form-control" id="content" name="content"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <input className="form-control" type="number" id="rating" name="rating" min="1" max="5"/>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="rant" name="rant"/>
                        <label className="form-check-label" htmlFor="rant">Rant</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </main>
        </Def>
    );
}

module.exports = NewComment;
