import React, {Component} from 'react';
import './App.css';
import cart from './assets/icon/shopping-cart.svg'
import search from './assets/icon/search.svg'

class App extends Component {
  render() {
    return (
      <div id="body">

        <div className="wrapper wrapper-bgi">
          <div className="container">
            <header className="header">
              <nav className="nav">
                <span className="logo">MoGo</span>
                <ul className="list">
                  <li className="item">about</li>
                  <li className="item">search</li>
                  <li className="item">work</li>
                  <li className="item">blog</li>
                  <li className="item">contact</li>
                  <img src={cart} alt="#" className="icon"/>
                  <img src={search} alt='#' className="icon"/>
                </ul>
                <div className="welcome">
                  <h2 className="main-subtitle">creative template</h2>
                  <h1 className="main-title">welcome to mogo</h1>
                  <button className="btn"> learn more</button>
                </div>

              </nav>
            </header>
          </div>
        </div>
        <div className="wrapper">
          <div className="container">
            <section id="services">
              <h3 className="subtitle"></h3>
              <h2 className="title"></h2>
              <ul className="services-list">
                <li className="services-item"><img src="" alt=""
                                                   className="services-img"/>
                  <p className="services-title"></p>
                  <p className="services-text">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Dolor,
                    ipsum.</p>
                </li>
                <li className="services-item"><img src="" alt=""
                                                   className="services-img"/>
                  <p className="services-title"></p>
                  <p className="services-text">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Dolor,
                    ipsum.</p>
                </li>
                <li className="services-item"><img src="" alt=""
                                                   className="services-img"/>
                  <p className="services-title"></p>
                  <p className="services-text">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Dolor,
                    ipsum.</p>
                </li>
                <li className="services-item"><img src="" alt=""
                                                   className="services-img"/>
                  <p className="services-title"></p>
                  <p className="services-text">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Dolor,
                    ipsum.</p>
                </li>
                <li className="services-item"><img src="" alt=""
                                                   className="services-img"/>
                  <p className="services-title"></p>
                  <p className="services-text">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Dolor,
                    ipsum.</p>
                </li>
                <li className="services-item"><img src="" alt=""
                                                   className="services-img"/>
                  <p className="services-title"></p>
                  <p className="services-text">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Dolor,
                    ipsum.</p>
                </li>
              </ul>
            </section>
            <section className="team">
              <h3 className="subtitle"></h3><h2 className="title"></h2><p className="team-description">Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Beatae consequuntur culpa ducimus mollitia? Adipisci at aut
              dolorem doloremque fugiat incidunt, iure laudantium pariatur quis rem rerum suscipit tenetur ullam
              vitae.</p>
              <div className="team-members">
                <ul className="team-members-list">
                  <li className="team-members-item"><img src="" alt="" className="team-members-img"/>
                    <p className="team-members-name"></p>
                    <p className="team-members-profession"></p>
                  </li>
                  <li className="team-members-item"><img src="" alt="" className="team-members-img"/>
                    <p className="team-members-name"></p>
                    <p className="team-members-profession"></p>
                  </li>
                  <li className="team-members-item"><img src="" alt="" className="team-members-img"/>
                    <p className="team-members-name"></p>
                    <p className="team-members-profession"></p>
                  </li>
                </ul>
              </div>
            </section>
            <footer className="footer">
              <p className="footer-text">
                @ 2016 MoGo free PSD template by
                <span className="footer-text--red">Laaqiq</span>
              </p>
              <form className="form">
                <input type="email" placeholder='Your Email...' className="input"/>
                <input type="submit" value='SUBSCRIBE' className="button"/>
              </form>
            </footer>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
