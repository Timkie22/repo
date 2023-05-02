
function ListGroup() {
    let items = [
        'New York',
        'Berlin',
        'Tokio',
        'London'
    ];
    items=[];


    const getMessage = () => {
        return items.length ===0 ? <p>No item found</p> : null;;
    }
    

  return (
    <>
        <h1>Liste</h1>
        {getMessage()}
        <ul className="list-group">
            {items.map(item => {
                return <li>{item}</li>;
            })}
        </ul>
    </>
  );
}

export default ListGroup;
