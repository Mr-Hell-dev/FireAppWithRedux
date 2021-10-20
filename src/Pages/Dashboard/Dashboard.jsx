import React from 'react';
import { Suspense, lazy, useState, useEffect } from 'react';
import { connect } from 'react-redux';
const AgGrid = lazy(() => import('../../Components/AgGrid/AgGrid'));

function Dashboard({ LoggedIn }) {
    const [DataforAg, setDataforAg] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/todos')
            .then((res) => res.json())
            .then((data) => setDataforAg(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <Suspense fallback={<div> Please wait </div>}>
                <AgGrid data={DataforAg} />
            </Suspense>
        </>
    );
}

const mapStateToProps = (state) => ({
    LoggedIn: state.LoginReducer.LoggedIn,
});

export default connect(mapStateToProps, null)(Dashboard);
