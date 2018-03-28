import React from 'react';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentTab: 0};
  }

  changeCurrentTab(newIndex) {
    this.setState({currentTab: newIndex});
  }

  render() {
    return (
      <section className="tabs-section">
        <ul className="tab-header-list">
          {
            this.props.tabs.map((el, index) => (
              <li className={"tab-header" + ((this.state.currentTab === index) ? " active" : "")}><h1 onClick={() => this.changeCurrentTab(index)}>{el.title}</h1></li>
            ))
          }
        </ul>
        <article className="tab-body">
          {
            this.props.tabs[this.state.currentTab].content
          }
        </article>
      </section>
    );
  }
}


export default Tabs;
