function rando() {
    const names = ['Ayla', 'Ryder', 'Grey', 'Crosby', 'Peyton', 'Bailee', 'Caitlyn', 'Bradley', 'Yvonne', 'Cameron'];
    return {
        get name() {
            return names[Math.floor(Math.random()* names.length)];
        },
    }
}