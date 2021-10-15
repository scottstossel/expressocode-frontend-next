const SignupComponent = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log('handle submit');
  }

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  const signupForm = () => {
    return (
      <form onSubmit={handleSumbit}>
        <div>
          <input onChange={handleChange} type="text" className="form-control" placeholder="type your name" />
        </div>
      </form>
    )
  }
  return (
    {signupForm()}
  )
}

export default SignupComponent;