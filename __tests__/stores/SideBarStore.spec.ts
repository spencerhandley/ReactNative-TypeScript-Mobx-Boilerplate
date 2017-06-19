import SideBarStore from '../../src/stores/SideBarStore';

test('initialzes to closed', () => {
    let store = new SideBarStore();

    expect(store.isOpen).toBeFalsy();
});

test('toggles isOpen', () => {
    let store = new SideBarStore();
    
    store.toggleSideMenu();
    expect(store.isOpen).toBeTruthy();
    store.toggleSideMenu();
    expect(store.isOpen).toBeFalsy();
});