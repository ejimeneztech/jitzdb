export async function load( {fetch}) {
    let res = await fetch('https://ejimenez90.pythonanywhere.com/techs');

    if (!res.ok) {
        throw new Error('Failed to fetch techs');
    }

    let techs = await res.json();

    return {
        techs
    };
}