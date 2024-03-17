const React= require ('react')
const Def = require('../default')

function new_form(){
    return(
        <Def>
            <main>
                <h1>Add a new Place</h1>
                <form method="POST" action="/places" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input id="name" name="name" style={{ marginBottom: '10px' }}/>
                        <label htmlFor="pic">Place Picture</label>
                        <input type="url" id="pic" name="pic" style={{ marginBottom: '10px' }}/>
                        <label htmlFor="city">Place City</label>
                        <input id="city" name="city" style={{ marginBottom: '10px' }}/>
                        <label htmlFor="state">Place State</label>
                        <input id="state" name="state" style={{ marginBottom: '10px' }}/>
                        <label htmlFor="cuisines">Place Cuisines</label>
                        <input id="cuisines" name="cuisines" required style={{ marginBottom: '10px' }}/>
                    </div>
                    <input type="submit" value="Add Place"/>
                </form>
            </main>
        </Def>
    )
}

module.exports= new_form