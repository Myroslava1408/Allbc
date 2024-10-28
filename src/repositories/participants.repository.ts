import { imagesMap } from '@/libs/imagesMap';
import { loadYamlData } from '@/libs/loadYaml';

interface IOwner {
  nameParticipant: string;
  apartments: number;
  housing: number;
  image: keyof typeof imagesMap;
  category: 'owner';
}
interface IBroker {
  nameParticipant: string;
  proposals: number;
  image: keyof typeof imagesMap;
  category: 'broker';
}
interface IBuilder {
  nameParticipant: string;
  proposals: string;
  image: keyof typeof imagesMap;
  category: 'builder';
}

interface IParticipantData {
  participants: {
    builders?: IBuilder[];
    brokers?: IBroker[];
    owners?: IOwner[];
  };
}

export const getBuilders = (): IBuilder[] => {
  const data: IParticipantData = loadYamlData(
    'participants',
  ) as IParticipantData;
  const builders = data.participants?.builders || [];
  return builders.filter((item) => item.category === 'builder');
};

export const getBrokers = (): IBroker[] => {
  const data: IParticipantData = loadYamlData(
    'participants',
  ) as IParticipantData;
  const brokers = data.participants?.brokers || [];
  return brokers.filter((item) => item.category === 'broker');
};

export const getOwners = (): IOwner[] => {
  const data: IParticipantData = loadYamlData(
    'participants',
  ) as IParticipantData;
  const owners = data.participants?.owners || [];
  return owners.filter((item) => item.category === 'owner');
};
