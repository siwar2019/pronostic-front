import {
    useEffect
} from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { userDemoLogin } from "../../../_redux/actions/auth";
import Loading from "../../Components/Loading";




export default function Demo() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(userDemoLogin(navigate))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <>
            <Loading />
        </>
    );
}
