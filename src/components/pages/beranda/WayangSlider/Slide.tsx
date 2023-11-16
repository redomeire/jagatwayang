interface Props {
    url: string
}

const Slide = (props: Props) => {
    return (
        <div className="bg-[url('/images/homepage/slider/pigora.png')] bg-contain bg-center bg-no-repeat flex items-center justify-center">
            <img src={props.url} className="!w-[250px]" />
        </div>
    );
}

export default Slide;
