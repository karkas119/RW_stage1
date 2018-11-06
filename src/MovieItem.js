import React, { Component } from "react";
import "./index.css";
import moviesData from './moviesData'

function Image(props) {
    return <img width="100%" src={props.src} alt={props.alt} />;
}

const title = moviesData.map(function (moviesData) {
    return moviesData.title
});

const rating = moviesData.map(function (moviesData) {
    return moviesData.vote_average
});

const link = moviesData.map(function (moviesData) {
    return moviesData.poster_path
});



const WillWatch = [];

class MovieItem1 extends React.Component {
    constructor() {
        super();
        this.state = {
            like: false,
            title: title[0],
            rating: rating[0],
            link: 'https://image.tmdb.org/t/p/w500'+ link[0],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[1],
            rating: rating[1],
            link: 'https://image.tmdb.org/t/p/w500'+ link[1],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[2],
            rating: rating[2],
            link: 'https://image.tmdb.org/t/p/w500' + link[2],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[3],
            rating: rating[3],
            link: 'https://image.tmdb.org/t/p/w500' + link[3],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[4],
            rating: rating[4],
            link: 'https://image.tmdb.org/t/p/w500' + link[4],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[5],
            rating: rating[5],
            link: 'https://image.tmdb.org/t/p/w500' + link[5],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[6],
            rating: rating[6],
            link: 'https://image.tmdb.org/t/p/w500' + link[6],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[7],
            rating: rating[7],
            link: 'https://image.tmdb.org/t/p/w500' + link[7],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[8],
            rating: rating[8],
            link: 'https://image.tmdb.org/t/p/w500' + link[8],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[9],
            rating: rating[9],
            link: 'https://image.tmdb.org/t/p/w500' + link[9],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[10],
            rating: rating[10],
            link: 'https://image.tmdb.org/t/p/w500' + link[10],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[11],
            rating: rating[11],
            link: 'https://image.tmdb.org/t/p/w500' + link[11],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[12],
            rating: rating[12],
            link: 'https://image.tmdb.org/t/p/w500' + link[12],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[13],
            rating: rating[13],
            link: 'https://image.tmdb.org/t/p/w500' + link[13],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[14],
            rating: rating[14],
            link: 'https://image.tmdb.org/t/p/w500' + link[14],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[15],
            rating: rating[15],
            link: 'https://image.tmdb.org/t/p/w500' + link[15],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[16],
            rating: rating[16],
            link: 'https://image.tmdb.org/t/p/w500' + link[16],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[17],
            rating: rating[17],
            link: 'https://image.tmdb.org/t/p/w500' + link[17],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[18],
            rating: rating[18],
            link: 'https://image.tmdb.org/t/p/w500' + link[18],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
            title: title[19],
            rating: rating[19],
            link: 'https://image.tmdb.org/t/p/w500' + link[19],
        };
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
        WillWatch.push(this.state.title);

    };
    render() {
        return (
            <div className="col-4 mb-4" style={{ float: "left", width: "300px" }}>
                <Image src={this.state.link} alt={title} />
                <p>{this.state.title}</p>
                <p> Rating : {this.state.rating}</p>
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
                <MovieItem1 />
                <MovieItem2 />
                <MovieItem3 />
                <MovieItem4 />
                <MovieItem5 />
                <MovieItem6 />
                <MovieItem7 />
                <MovieItem8 />
                <MovieItem9 />
                <MovieItem10 />
                <MovieItem11 />
                <MovieItem12 />
                <MovieItem13 />
                <MovieItem14 />
                <MovieItem15 />
                <MovieItem16 />
                <MovieItem17 />
                <MovieItem18 />
                <MovieItem19 />
                <MovieItem20 />


                <WillWatchShow />
            </div>
        );
    }
}
//
export default MovieList;
