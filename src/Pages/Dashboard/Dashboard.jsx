import React from 'react';
import { Suspense, lazy, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { fireStorage } from '../../Firebase';
const AgGrid = lazy(() => import('../../Components/AgGrid/AgGrid'));

function Dashboard({ User }) {
    const [DataforAg, setDataforAg] = useState([]);
    useEffect(() => {
        // getDocs(collection(fireStorage, 'Students'))
        //     .then((data) => {
        //         const tempdata = [];
        //         data.forEach((docs) => {
        //             tempdata.push(docs.data());
        //         });
        //         setDataforAg(tempdata);
        //     })
        //     .catch((err) => console.log(err.code));
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((data) => {
                setDataforAg(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            {}
            <Suspense fallback={<div> Please wait </div>}>
                <AgGrid data={DataforAg} />
            </Suspense>
        </>
    );
}

const mapStateToProps = (state) => ({
    User: state.LoginReducer.User,
});

export default connect(mapStateToProps, null)(Dashboard);
