import React from 'react'

const Row = ({ left, right }) => {
    return (
        <div className="row">
            <div className="col-lg-6 col-12 mb-3">
                {left}
            </div>
            <div className="col-lg-6 col-12 mb-2">
                {right}
            </div>
        </div>
    );
}

export default Row;