interface IPageHeaderProps {
    content: string;
}

function PageHeader({content}: IPageHeaderProps) {
    return <h1 className="text-4xl leading-loose">{content}</h1>;
}

export default PageHeader;
