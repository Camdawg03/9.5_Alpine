function rando() {
    const name = ['Ayla', 'Ryder', 'Grey', 'Crosby', 'Peyton', 'Bailee', 'Caitlyn', 'Bradley', 'Yvonne', 'Cameron'];
    return {
        getname() {
            return name[Math.floor(Math.random() * names.length)];
        },
    }
}