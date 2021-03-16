interface props {
  children: React.ReactNode;
}
const Container = ({ children }: props) => {
  return <div className="m-10">{children}</div>;
};

export default Container;
