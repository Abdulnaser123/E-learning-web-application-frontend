import React from 'react';
import Sidebar from './Sidebar';

function Setting() {
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Profile Setting</h5>
            <div className="card-body">
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Full name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    value="email@example.com"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="staticEmail"
                    value="email@example.com"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Profile photo
                </label>
                <div class="col-sm-10">
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  Password
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  Interests
                </label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputPassword" />
                </div>
              </div>
              <div className="mb-3 row">
                <button className="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Setting;
