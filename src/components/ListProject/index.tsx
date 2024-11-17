import { CardProject, CardProjetType } from "../CardProject";
import { List } from "./styles";


type ListProjectProps = {
    items?: CardProjetType[];
};

export function ListProject({ items }: ListProjectProps) {
    return (
        <List>
            {items && items.length > 0 ? (
                items.map(item => <CardProject key={item.key} img={item.img} language={item.language} title={item.title} link={item.link} gitHub={item.gitHub} />)
            ) : (
                <p>Nenhum item disponível</p>
            )}
        </List>
    );
}