var Item = ReactMeteor.createClass({
  templateName: "item",

  // Make sure your component implements this method.
  getMeteorState: function() {
    return {
        kitty: "Miss Kitty Fantastico"
    };
  },

  /**
   * @jsx React.DOM
   */
  render: function () {
    var { name, count, ...rest } = this.props;
    return <div>
            <span className="count">{count}</span>
            <span className="name">{name}</span>
           </div>;
  }
});
