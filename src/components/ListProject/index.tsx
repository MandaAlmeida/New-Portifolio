import { CardProject, CardProjetType } from "../CardProject";
import { List } from "./styles";


type ListProjectProps = {
    items?: CardProjetType[];
};

export function ListProject({ items }: ListProjectProps) {
    return (
        <List>
            {items && items.length > 0 ? (
                items.map(item => <CardProject key={item.id} id={item.id} image={item.image} text={item.text} title={item.title} />)
            ) : (
                <p>Nenhum item disponível</p>
            )}
        </List>
    );
}