function Random() {

    let number = Math.round(Math.random() * 100);

    return <h1 style={{ 'background-color': '#776691' }}>Message {number}: Hello this is a random number</h1>
}

export default Random;