import './App.css';
function App() {
  return (
    <container >   
    <form>
    <p>Formulaire</p>
    <div className="form-group">
    <label for="InputFirstName">First Name</label>
      <input type="text" className="form-control" id="InputFirstName" placeholder="First name"/>
    </div>
    <div className="form-group">
    <label for="InputName">Name</label>
      <input type="text" className="form-control" id="InputName" placeholder="Last name"/>
    </div>
  <div className="form-group">
              <label for="InputEmail1">Email address</label>
              <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
             <label for="InputPassword1">Password</label>
            <input type="password" className="form-control" id="InputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
           <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn btn-secondary btn-lg">Submit</button>
</form>
</container>
  );
}

export default App;
