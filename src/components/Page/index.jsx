import useStyles from "./styles";


const Page = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.page} size="A4">
            {props.children}
        </div>
    )
};

export default Page;