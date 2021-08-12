import React from 'react';

class FoodBox extends React.Component {
  state = {
    quantity: 1,
  };

  handleChange = (event) => {
    this.setState({
      quantity: event.target.value,
    });
  };

  handleClick = () => {
    const selectedFood = {
      ...this.props.food,
      quantity: Number(this.state.quantity),
    };

    this.props.handleSelect(selectedFood);
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button onClick={this.handleClick} className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
