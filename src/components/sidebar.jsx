import React from 'react'
import "./css/side.css"
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse"

function side() {
  return (
    <div className='side' style={{backgroundColor: "#060313"}}>
        <div className='m-2'>
            {/* <span className='brand-name'>sidebar</span> */}
            <img className="mt-4 img-fluid" src="../assets/sidebar-logo.svg" />
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
        <ul class="nav nav-pills flex-column mt-md-4" id="parentM">
                <li class="nav-item text-white my-1">
                  <a href="#" class="nav-link" aria-current="page">
                    <img src="../assets/sidebar/beranda-icon.svg" />
                    <span className="ms-2 text-white">Beranda</span>
                  </a>
                </li>

                <li class="nav-item text-white my-1">
                  <a
                    href="#submenu"
                    class="nav-link"
                    data-bs-toggle="collapse"
                    aria-current="page"
                  >
                    <img src="../assets/sidebar/koin-icon.svg" />
                    <span className="ms-2 text-white ">Koin NUsantara</span>{" "}
                    <img className="ms-4" src="../assets/sidebar/arrow-right.svg" />
                  </a>
                  <ul
                    class="nav collapse row "
                    id="submenu"
                    data-bs-parent="#parentM"
                  >
                    <li class="nav-item">
                      <a class="nav-link text-white" href="/koin" aria-current="page">
                        <img src="../assets/sidebar/dot-icon.svg"/><span className="ms-2">Campaign Program</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">
                      <img src="../assets/sidebar/dot-icon.svg"/><span className="ms-2">Donatur</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item text-white my-1">
                  <a href="#" class="nav-link" aria-current="page">
                    <img src="../assets/sidebar/nderek-icon.svg" />
                    <span className="ms-2 text-white">Nderek Tanglet</span>
                  </a>
                </li>
                <li class="nav-item text-white my-1 ">
                  <a href="#submenu2" class="nav-link" data-bs-toggle="collapse" aria-current="page">
                    <img src="../assets/sidebar/konten-icon.svg" />
                    <span className="ms-2 text-white">Konten</span>
                    <img className="" src="../assets/sidebar/arrow-right.svg" />
                  </a>
                  <ul
                    class="nav collapse row "
                    id="submenu2"
                    data-bs-parent="#parentM"
                  >
                    <li class="nav-item">
                      <a class="nav-link text-white" href="/berita" aria-current="page">
                        <img src="../assets/sidebar/dot-icon.svg"/><span className="ms-2">Berita</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="/artikel">
                      <img src="../assets/sidebar/dot-icon.svg"/><span className="ms-2">Artikel</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="/event">
                      <img src="../assets/sidebar/dot-icon.svg"/><span className="ms-2">Event</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">
                      <img src="../assets/sidebar/dot-icon.svg"/><span className="ms-2">Partnerhip/Ads</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item text-white my-1">
                  <a href="#" class="nav-link" aria-current="page">
                    <img src="../assets/sidebar/anggota-icon.svg" />
                    <span className="ms-2 text-white">Anggota</span>
                  </a>
                </li>
                <li class="nav-item text-white my-1">
                  <a href="#" class="nav-link" aria-current="page">
                    <img src="../assets/sidebar/pengurus-icon.svg" />
                    <span className="ms-2 text-white">Pengurus</span>
                  </a>
                </li>
                <li class="nav-item text-white my-1">
                  <a href="/pengaturan" class="nav-link" aria-current="page">
                    <img src="../assets/sidebar/pengaturan-icon.svg" />
                    <span className="ms-2 text-white">Pengaturan</span>
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a href="#" class="nav-link">
                    Disabled
                  </a>
                </li> */}
              </ul>
        </div>
    </div>
  )
}

export default side