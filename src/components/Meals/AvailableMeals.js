import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const RenderMeals = () => {

    const availableMeals = DUMMY_MEALS;

    if (availableMeals.length === 0) {
        return (
            <h1>No Item Found</h1>
        )
    }

    const mealsList = availableMeals.map((meal) => (
        <MealItem 
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ))
    return mealsList;

}


const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    <RenderMeals />
                </ul>
            </Card>

        </section>
    )
}

export default AvailableMeals;