import Breadcrumbs from '../components/breadcrumbs';

export default function AddMember(){
    const routes = [
        {name: 'Members', href: "/members", active: false},
        {name: "Add members", href: "/add-members", active: true}
    ]

    return(
        <div className="">
            <Breadcrumbs routes={routes}/>
        </div>
    )
}