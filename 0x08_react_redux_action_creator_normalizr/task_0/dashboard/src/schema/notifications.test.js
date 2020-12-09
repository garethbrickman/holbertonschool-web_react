import getAllNotificationsByUser from './notifications';
import { expect as expect2 } from 'chai';

describe('notifications schema', () => {
    test('returns correct contexts', () => {
      const expected = [
        {
          guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
          isRead: true,
          type: 'urgent',
          value:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        },
        {
          guid: '280913fe-38dd-4abd-8ab6-acdb4105f922',
          isRead: false,
          type: 'urgent',
          value:
            'Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed'
        }
      ];
  
      const notifs = getAllNotificationsByUser('5debd764a7c57c7839d722e9');

      // check returned content
      expect2(notifs.length).to.equal(2);
      expect2(notifs[0].guid).to.equal('2d8e40be-1c78-4de0-afc9-fcc147afd4d2');
      expect2(notifs[1].guid).to.equal('280913fe-38dd-4abd-8ab6-acdb4105f922');

      // check context items have correct values
      expect(notifs.some((notif) => notif.isRead === undefined)).toBe(false);
      expect(notifs.some((notif) => notif.type === undefined)).toBe(false);
      expect(notifs.some((notif) => notif.value === undefined)).toBe(false);
  
      expect(notifs.some((notif) => Object.keys(notif).length !== 4)).toBe(false);
    });
    test('gives empty contexts with wrong id', () => {
        const notifWrong = getAllNotificationsByUser('45');
        expect2(notifWrong.length).to.equal(0);
    });
});
