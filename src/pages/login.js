import React from 'react';
import "../css/login.css"

export default function Login() {
  return (
    <>
    
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center ">
          <div className="col-lg-6 px-0">
            <img
              src="../assets/login image.svg"
              alt="Login image"
              className="login-img vh-100 d-none d-lg-flex"
              style={{ objectFit: "cover", width: "100%"}}
            />
            <img
              src="../assets/login image 2.svg"
              alt="Login image"
              className="login-img mb-5 d-none d-md-flex d-lg-none "
              style={{ objectFit: "cover", width: "100%", height: "300px"}}
            />
            <img
              src="../assets/login image 3.svg"
              alt="Login image"
              className="login-img d-flex d-md-none d-lg-none "
              style={{ objectFit: "cover", width: "100%", height: "170px"}}
            />
          </div>
          <div className="col-11 col-md-8 col-lg-6 text-black">
            <div className='px-4 pt-5 pt-md-0 px-lg-5 mx-lg-5'>
            <span className="h1 fw-bold mb-0">Selamat Datang di nubatu.id 👋</span>
              <p className='mt-4' style={{color: "#667085"}}>Meneguhkan Peran Khidmah dan Aktualisasi Visi Multilateral An-Nahdliyyah</p>
              <div className="form-outline mb-3 mt-5">
                  <label className="form-label fs-6" htmlFor="form2Example18">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg fs-6"
                    placeholder="nama user"
                  />
                  
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label fs-6" htmlFor="form2Example18">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg fs-6"
                    placeholder="******"
                  />
                </div>
                <div className="pt-1  ">
                    <a href='/'>
                <button className="btn btn-block w-100 text-white fs-6" type="button" style={{backgroundColor: "#009B4C"}}>
                Get started
                </button></a>
              </div>
            </div>










            {/* <div className="px-5 ms-xl-4">
              <span className="h1 fw-bold mb-0">Selamat Datang di nubatu.id 👋</span>
              <p>Meneguhkan Peran Khidmah dan Aktualisasi Visi Multilateral An-Nahdliyyah</p>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: "23rem" }}> */}
                {/* <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                  Log in
                </h3> */}

                {/* <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form2Example18">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example28"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form2Example28">
                    Password
                  </label>
                </div>

                <div className="pt-1 mb-4">
                  <button className="btn btn-info btn-lg btn-block" type="button">
                    Login
                  </button>
                </div> */}

                {/* <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account? <a href="#!" className="link-info">Register here</a>
                </p> */}
              {/* </form>
            </div> */}
          </div>
        </div>
      </div>
    </section>


    {/* // <!-- Login 8 - Bootstrap Brain Component --> */}
{/* <section class="bg-light ">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-xxl-11">
        <div class="card border-light-subtle shadow-sm">
          <div class="row g-0">
            <div class="col-12 col-md-6">
              <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src="../assets/login image.svg" alt="Welcome back you've been missed!"/>
            </div>
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <div class="col-12 col-lg-11 col-xl-10">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <div class="row">
                    <div class="col-12">
                      <div class="mb-5">
                        <div class="text-center mb-4">
                          <a href="#!">
                            <img src="./assets/img/bsb-logo.svg" alt="BootstrapBrain Logo" width="175" height="57"/>
                          </a>
                        </div>
                        <h4 class="text-center">Welcome back you've been missed!</h4>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="d-flex gap-3 flex-column">
                        <a href="#!" class="btn btn-lg btn-outline-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                          </svg>
                          <span class="ms-2 fs-6">Log in with Google</span>
                        </a>
                      </div>
                      <p class="text-center mt-4 mb-5">Or sign in with</p>
                    </div>
                  </div>
                  <form action="#!">
                    <div class="row gy-3 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required/>
                          <label for="email" class="form-label">Email</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" name="password" id="password" value="" placeholder="Password" required/>
                          <label for="password" class="form-label">Password</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me"/>
                          <label class="form-check-label text-secondary" for="remember_me">
                            Keep me logged in
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid">
                          <button class="btn btn-dark btn-lg" type="submit">Log in now</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="row">
                    <div class="col-12">
                      <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                        <a href="#!" class="link-secondary text-decoration-none">Create new account</a>
                        <a href="#!" class="link-secondary text-decoration-none">Forgot password</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
{/* </section> */}
</>
  );
}
