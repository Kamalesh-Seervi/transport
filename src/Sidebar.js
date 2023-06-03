import React from 'react'

export default function Sidebar() {
  return (
<>
<header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/">Transport Services</a>

  <ul className="navbar-nav flex-row d-md-none">
    <li className="nav-item text-nowrap">
      <button className="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
        <svg className="bi"><use href="#search"/></svg>
      </button>
    </li>
    <li className="nav-item text-nowrap">
      <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <svg className="bi"><use href="#list"/></svg>
      </button>
    </li>
  </ul>

  <div id="navbarSearch" className="navbar-search w-100 collapse">
    <input className="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search"/>
  </div>
</header>

<div className="container-fluid">
  <div className="row">
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div className="offcanvas-lg offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">Transport Services</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
           <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Home
        </button>
        <div className="collapse show" id="home-collapse">
        <form className="row g-3">
  <div className="col-auto">
    <input type="number" className="form-control" id="inputPassword2" placeholder="No of Drivers" style={{marginLeft:"10px"}}/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3 bg-dark"style={{marginLeft:"10px"}}>Locate</button>
  </div>
</form>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Orders
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">BFF</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-1"></li>
      </ul>
        </div>
      </div>
      <div className="b-example-vr"></div>
    </div>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">MAP </h1>
      </div>

      <div className='container mapstyle'>

    </div>
    </main>
  </div>
</div>
</>
  )
}
