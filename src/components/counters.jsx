import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const newCountersArray = this.state.counters.filter(
      (element) => element.id !== counterId
    );
    this.setState({ counters: newCountersArray });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

//ORIGINALLY I STARTED DEVELOPING THIS AS A FUNCTIONAL COMPONENT
//      BUT IT MAKES MORE SENSE TO MAKE THIS A CLASS COMPONENT

// function Counters() {
//   const [counters, setCounters] = useState([
//     { id: 1, value: 4 },
//     { id: 2, value: 0 },
//     { id: 3, value: 0 },
//     { id: 4, value: 0 },
//   ]);

//   handleDelete = (counterID) => {
//     // Here basicly we just create a new array, and filter out the
//     //    element we want to delete. Then we set this new array as the
//     //    current array.
//     const newCountersArray = this.counters.filter(
//       (element) => element.id !== counterID
//     );
//     setCounters({ counters: newCountersArray });
//   };

//   return (
//     <div>
//       {counters.map((counter) => (
//         <Counter key={counter.id} counter={counter} onDelete={handleDelete} />
//       ))}
//     </div>
//   );
// }

// export default Counters;
