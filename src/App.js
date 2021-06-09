import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: './resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Projects data={this.state.resumeData.portfolio} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
