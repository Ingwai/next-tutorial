const SignInPage = ({ params }: { params: { 'sign-in': string[] } }) => {
	console.log(params);
	console.log(params['sign-in'][2]);
	return <div>SignInPage {params['sign-in'][2]}</div>;
};
export default SignInPage;
