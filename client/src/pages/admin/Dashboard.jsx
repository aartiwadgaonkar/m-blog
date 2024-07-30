import React from 'react'

export default function Dashboard() {
    const stat = [1, 2, 3, 4]
    return <>
        <div className="container mt-1">
            <div className="row">
                {
                    stat.map(item => <div className="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <p className='fs-1'>fs-1</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    </>
}
