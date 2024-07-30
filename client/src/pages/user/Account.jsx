import React from 'react'

const Account = () => {
  return <>
  <div className="container">
    <div className="row">
        <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
               <p className='fs-1'>Total : 5</p>
               <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
              <p className='fs-1'>Publish : 2</p>
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
              <p className='fs-1'>Pending : 3</p>
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default Account