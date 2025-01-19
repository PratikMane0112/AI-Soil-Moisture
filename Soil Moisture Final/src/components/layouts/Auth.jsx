import { Navigate, Outlet } from "react-router-dom";
import useTokenStore from "../../store/userTokenStore";
import ScrollToTop from "../common/ScrollToTop";

const Auth = () => {
	const { token } = useTokenStore((state) => state);
	if (token) {
		return <Navigate to={"/home"} replace />;
	}
	return (
		<>
		<ScrollToTop/>
			<Outlet />
		</>
	);
};

export default Auth;
