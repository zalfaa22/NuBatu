import React from 'react';
import "../css/login.css"

export default function Login() {
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center ">
          <div className="col-lg-6 px-0 d-none d-sm-block">
            <img
              src="../assets/login image.svg"
              alt="Login image"
              className="login-img vh-100 img-fluid"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6 text-black">
            <div className='px-4 pt-5 pt-md-0 px-lg-5 mx-lg-5'>
            <span className="h1 fw-bold mb-0">Selamat Datang di nubatu.id 👋</span>
              <p className='mt-4' style={{color: "#667085"}}>Meneguhkan Peran Khidmah dan Aktualisasi Visi <br/> Multilateral An-Nahdliyyah</p>
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
  );
}
