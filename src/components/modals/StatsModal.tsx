import { ClockIcon, ShareIcon } from '@heroicons/react/outline'
import { format } from 'date-fns'
import Countdown from 'react-countdown'

import {
  DATE_LOCALE,
  ENABLE_ARCHIVED_GAMES,
  ENABLE_MIGRATE_STATS,
} from '../../constants/settings'
import {
  ARCHIVE_GAMEDATE_TEXT,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
  STATISTICS_TITLE,
} from '../../constants/strings'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { solutionGameDate, tomorrow } from '../../lib/words'
import { Histogram } from '../stats/Histogram'
import { MigrationIntro } from '../stats/MigrationIntro'
import { StatBar } from '../stats/StatBar'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  solution: string
  guesses: string[]
  gameStats: GameStats
  isLatestGame: boolean
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  handleShareFailure: () => void
  handleMigrateStatsButton: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
  numberOfGuessesMade: number
}

export const StatsModal = ({
  isOpen,
  handleClose,
  solution,
  guesses,
  gameStats,
  isLatestGame,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  handleShareFailure,
  handleMigrateStatsButton,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
  numberOfGuessesMade,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        {/*<StatBar gameStats={gameStats} />*/}
        {/*{ENABLE_MIGRATE_STATS && (*/}
        {/*  <MigrationIntro handleMigrateStatsButton={handleMigrateStatsButton} />*/}
        {/*)}*/}
        <p className="text-sm text-gray-500 dark:text-gray-300">
          That's it that's all. Я поздравляю тебя с днем рождения и надеюсь, что эта мини-игра сделала в нем
          на одну твою улыбку больше. Желаю тебе бычьего здоровья, чтобы вывозить любые тусы; удачи, чтобы твоя магия
          работала безотказно; и свободы, потому что ты знаешь, как ей красиво пользоваться. Ты уже заебись,
          дальше - больше!<br /><br />

          Держи хвост пистолетом, обнял :) <br /><br />

          P.S Если ты видишь это сообщение, значит ты прошла игру. Вообще оно появляется и если проебать,
          но я был настолько в тебе уверен, что даже не тестировал этот сценарий.
        </p>

      </BaseModal>
    )
  }
  return (
    <BaseModal
      title={'That\'s a bummer'}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Видимо произошел какой-то баг и ты проиграла по ошибке. Не могу представить, как еще это могло произойти.
        Используй режим инкогнито, чтобы сбросить сессию и попробовать снова, если хочешь.
        Баг репорты принимаю в @donskoy
      </p>
      {/*<StatBar gameStats={gameStats} />*/}
      {/*<h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">*/}
      {/*  {GUESS_DISTRIBUTION_TEXT}*/}
      {/*</h4>*/}
      {/*<Histogram*/}
      {/*  isLatestGame={isLatestGame}*/}
      {/*  gameStats={gameStats}*/}
      {/*  isGameWon={isGameWon}*/}
      {/*  numberOfGuessesMade={numberOfGuessesMade}*/}
      {/*/>*/}
      {/*{(isGameLost || isGameWon) && (*/}
      {/*  <div className="mt-5 columns-2 items-center items-stretch justify-center text-center dark:text-white sm:mt-6">*/}
      {/*    <div className="inline-block w-full text-left">*/}
      {/*      {(!ENABLE_ARCHIVED_GAMES || isLatestGame) && (*/}
      {/*        <div>*/}
      {/*          <h5>{NEW_WORD_TEXT}</h5>*/}
      {/*          <Countdown*/}
      {/*            className="text-lg font-medium text-gray-900 dark:text-gray-100"*/}
      {/*            date={tomorrow}*/}
      {/*            daysInHours={true}*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*      {ENABLE_ARCHIVED_GAMES && !isLatestGame && (*/}
      {/*        <div className="mt-2 inline-flex">*/}
      {/*          <ClockIcon className="mr-1 mt-2 mt-1 h-5 w-5 stroke-black dark:stroke-white" />*/}
      {/*          <div className="mt-1 ml-1 text-center text-sm sm:text-base">*/}
      {/*            <strong>{ARCHIVE_GAMEDATE_TEXT}:</strong>*/}
      {/*            <br />*/}
      {/*            {format(solutionGameDate, 'd MMMM yyyy', {*/}
      {/*              locale: DATE_LOCALE,*/}
      {/*            })}*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <button*/}
      {/*        type="button"*/}
      {/*        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"*/}
      {/*        onClick={() => {*/}
      {/*          shareStatus(*/}
      {/*            solution,*/}
      {/*            guesses,*/}
      {/*            isGameLost,*/}
      {/*            isHardMode,*/}
      {/*            isDarkMode,*/}
      {/*            isHighContrastMode,*/}
      {/*            handleShareToClipboard,*/}
      {/*            handleShareFailure*/}
      {/*          )*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        <ShareIcon className="mr-2 h-6 w-6 cursor-pointer dark:stroke-white" />*/}
      {/*        {SHARE_TEXT}*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{ENABLE_MIGRATE_STATS && (*/}
      {/*  <div>*/}
      {/*    <hr className="mt-4 -mb-4 border-gray-500" />*/}
      {/*    <MigrationIntro handleMigrateStatsButton={handleMigrateStatsButton} />*/}
      {/*  </div>*/}
      {/*)}*/}
    </BaseModal>
  )
}
