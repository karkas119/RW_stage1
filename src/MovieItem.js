import React, { Component } from "react";
import "./index.css";
import movie1 from "./movie1";
import movie2 from "./movie2";
import movie3 from "./movie3";
import movie4 from "./movie4";
import movie5 from "./movie5";
import movie6 from "./movie6";
import movie7 from "./movie7";
import movie8 from "./movie8";
import movie9 from "./movie9";
import movie10 from "./movie10";
import movie11 from "./movie11";
import movie12 from "./movie12";
import movie13 from "./movie13";
import movie14 from "./movie14";
import movie15 from "./movie15";
import movie16 from "./movie16";
import movie17 from "./movie17";
import movie18 from "./movie18";
import movie19 from "./movie19";
import movie20 from "./movie20";

function Image(props) {
  // console.log('Image props',props);
  return <img width="100%" src={props.src} alt={props.alt} />;
}

const WillWatch = [];

class MovieItem1 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Avengers: Infinity War"
    };
  }

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}

class MovieItem2 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Red Sparrow"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem3 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Hereditary"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem4 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Incredibles 2"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "right", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem5 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Terminal"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem6 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Anon"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem7 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Overboard"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem8 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Future World"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem9 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Isle of Dogs"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem10 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "How to Talk to Girls at Parties"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem11 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Mary Shelley"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem12 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Blockers"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem13 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Loving Pablo"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem14 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "I Feel Pretty"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem15 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "The Invisible Guest"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem16 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Sobchak Case"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem17 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Show Dogs"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ width: "300px", height: "200px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem18 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "The First"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem19 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Leto"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class MovieItem20 extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      title: "Sobibor"
    };
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
    WillWatch.push(this.state.title);
    console.log(WillWatch);
  };
  render() {
    const {
      data: { title, vote_average, poster_path }
    } = this.props;
    return (
      <div className="col-4 mb-4" style={{ float: "right", width: "300px" }}>
        <Image src={poster_path} alt={title} />
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={this.handleLike}
            willwatch={this.state.like ? "" : WillWatch.splice(0, 20)}
          >
            Will watch
          </button>
          <WillWatchShow name={this.state.title} />
        </div>
      </div>
    );
  }
}
class WillWatchShow extends React.Component {
  render() {
    return <div className={"movie1_show"}>{WillWatch}</div>;
  }
}

class MovieList extends Component {
  render() {
    return (
      <div className="container" style={{ width: "60%" }}>
        <MovieItem1 data={movie1} />
        <MovieItem2 data={movie2} />
        <MovieItem3 data={movie3} />
        <MovieItem4 data={movie4} />
        <MovieItem5 data={movie5} />
        <MovieItem6 data={movie6} />
        <MovieItem7 data={movie7} />
        <MovieItem8 data={movie8} />
        <MovieItem9 data={movie9} />
        <MovieItem10 data={movie10} />
        <MovieItem11 data={movie11} />
        <MovieItem12 data={movie12} />
        <MovieItem13 data={movie13} />
        <MovieItem14 data={movie14} />
        <MovieItem15 data={movie15} />
        <MovieItem16 data={movie16} />
        <MovieItem17 data={movie17} />
        <MovieItem18 data={movie18} />
        <MovieItem19 data={movie19} />
        <MovieItem20 data={movie20} />
        <WillWatchShow />
      </div>
    );
  }
}
//
export default MovieList;
