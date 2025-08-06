const Hello = (props) => {
    // const bornYear = () => {
    //     const currentYear = new Date().getFullYear();
    //     return currentYear - props.age;
    // }

    const {name, age} = props;
    const bornYear = new Date().getFullYear() - age;
  return (
    <div>
        <p>Hello! {name}, you are {age} years old.</p>
        <p>So you were probably born in {bornYear}</p>
    </div>
  )
}

export default Hello