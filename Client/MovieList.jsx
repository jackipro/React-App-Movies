class MovieList extends React.Component {
  constructor() {
    super();
    this.state = { movielist: [] };
  }
  render() {
    var list = [];
    for (var movie of this.state.movielist) {
      list.push(
        <tr>
          <td>
            <a href='#' onClick={this.linkSelect} data-params={movie._id}>
              {movie._id}
            </a>
          </td>
          <td>{movie.name}</td>
          <td>{movie.hours}</td>
          <td>{movie.price}</td>
        </tr>
      );
    }
    return (
      <div>
        <h1>
          <i class='fas fa-ticket-alt'></i> Movies ticket
        </h1>
        <table>
          <tr>
            <th>ID of movies</th>
            <th>Name</th>
            <th>Hours</th>
            <th>Price</th>
          </tr>
          {list}
        </table>
        <br />
        <h1>
          <i class='fas fa-cogs'></i> Movies Action
        </h1>
        <div className='movie-action'>
          <div className='box'>
            <h3>ID of movies </h3>
            <input type='text' ref='_id' />
          </div>
          <div className='box'>
            <h3>Name </h3>
            <input type='name' ref='name' />
          </div>
          <div className='box'>
            <h3>Hours of movie </h3>
            <input type='hours' ref='hours' />
          </div>
          <div className='box'>
            <h3>Price ticket </h3>
            <input type='price' ref='price' />
          </div>
        </div>
        <div className='btn'>
          <button>
            <i className='fas fa-plus normal-icon'></i> Add new
          </button>
          <button>
            <i class='fas fa-pen normal-icon'></i> Update
          </button>
          <button className='highlight'>
            <i class='far fa-trash-alt delete-icon'></i> Delete
          </button>
        </div>
      </div>
    );
  }
  componentDidMount() {
    //ANCHOR  Get data and give to movielist
    axios.get("http://localhost:9999/book").then(respone => {
      this.setState({ movielist: respone.data });
    });
    //ANCHOR  function linkSelect
    this.linkSelect = e => {
      var id = e.target.getAttribute("data-params");
      axios.get("http://localhost:9999/book/" + id).then(respone => {
        var movie = respone.data;
        this.refs._id.value = movie._id;
        this.refs.name.value = movie.name;
        this.refs.hours.value = movie.hours;
        this.refs.price.value = movie.price;
      });
    };
  }
}
ReactDOM.render(<MovieList />, document.getElementById("root"));
